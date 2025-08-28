import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Minimize, 
  SkipBack, SkipForward, Settings, Clock, CheckCircle,
  ChevronLeft, ChevronRight, BookOpen, Monitor, Download
} from 'lucide-react';
import ResponsiveAppBar from './appBar';
import Footer from './footer';
import { ThemeProvider, useTheme } from './darkTheme';
import './VideoPlayer.css';

const PaginaAula = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [showSettings, setShowSettings] = useState(false);
  const [progress, setProgress] = useState(0);
  const [chapters, setChapters] = useState([
    { id: 1, title: "Introdução ao Curso", time: 0, completed: true },
    { id: 2, title: "Cumprimentos Básicos", time: 120, completed: true },
    { id: 3, title: "Verbo To Be", time: 360, completed: false },
    { id: 4, title: "Pronomes Pessoais", time: 600, completed: false },
    { id: 5, title: "Exercícios Práticos", time: 900, completed: false }
  ]);
  
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const controlsTimeout = useRef(null);
  const containerRef = useRef(null);

  // Atualiza o tempo atual do vídeo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / duration) * 100);
    };

    const updateDuration = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [duration]);

  // Controles de teclado
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!videoRef.current) return;
      
      switch(e.key) {
        case ' ':
          e.preventDefault();
          togglePlay();
          break;
        case 'f':
          toggleFullscreen();
          break;
        case 'm':
          toggleMute();
          break;
        case 'ArrowRight':
          seek(5);
          break;
        case 'ArrowLeft':
          seek(-5);
          break;
        case 'ArrowUp':
          changeVolume(0.1);
          break;
        case 'ArrowDown':
          changeVolume(-0.1);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Esconder controles após um tempo
  useEffect(() => {
    if (isPlaying) {
      controlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }

    return () => clearTimeout(controlsTimeout.current);
  }, [isPlaying, showControls]);

  // Detectar mudanças no modo de tela cheia
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const changeVolume = (value) => {
    const newVolume = Math.min(Math.max(volume + value, 0), 1);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const seek = (seconds) => {
    if (!videoRef.current) return;
    
    videoRef.current.currentTime += seconds;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleProgressClick = (e) => {
    if (!videoRef.current) return;
    
    const progressBar = e.currentTarget;
    const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
    const newTime = clickPosition * duration;
    
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const changePlaybackRate = (rate) => {
    if (!videoRef.current) return;
    
    videoRef.current.playbackRate = rate;
    setPlaybackRate(rate);
    setShowSettings(false);
  };

  const jumpToChapter = (time) => {
    if (!videoRef.current) return;
    
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const showControlsHandler = () => {
    setShowControls(true);
    clearTimeout(controlsTimeout.current);
  };

  return (
    <div className="main-container">
      <ResponsiveAppBar />
      <div 
        className={`video-player-container ${isFullscreen ? 'fullscreen' : ''}`} 
        ref={containerRef}
        onMouseMove={showControlsHandler}
      >
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="video-element"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            onClick={togglePlay}
          />
          
          {/* Overlay de controles */}
          <div className={`controls-overlay ${showControls ? 'visible' : 'hidden'}`}>
            
            {/* Top bar - título e progresso */}
            <div className="top-controls">
              <div className="video-info">
                <h3 className="video-title">Aula 3: Verbo To Be - Explicação Completa</h3>
                <div className="progress-text">
                  <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
                </div>
              </div>
              <div className="chapter-progress">
                <div className="progress-bar" onClick={handleProgressClick}>
                  <div 
                    className="progress-filled" 
                    style={{ width: `${progress}%` }}
                  >
                    <div className="progress-handle"></div>
                  </div>
                  {chapters.map(chapter => (
                    <div 
                      key={chapter.id}
                      className={`chapter-marker ${chapter.completed ? 'completed' : ''}`}
                      style={{ left: `${(chapter.time / duration) * 100}%` }}
                      title={chapter.title}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Middle controls - botão play central */}
            <div className="middle-controls">
              <button className="control-btn large" onClick={() => seek(-10)}>
                <SkipBack size={28} />
              </button>
              <button className="play-pause-btn" onClick={togglePlay}>
                {isPlaying ? <Pause size={36} /> : <Play size={36} />}
              </button>
              <button className="control-btn large" onClick={() => seek(10)}>
                <SkipForward size={28} />
              </button>
            </div>
            
            {/* Bottom controls - outros controles */}
            <div className="bottom-controls">
              <div className="left-controls">
                <button className="control-btn" onClick={togglePlay}>
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                
                <button className="control-btn" onClick={toggleMute}>
                  {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                
                <div className="volume-control">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => changeVolume(parseFloat(e.target.value) - volume)}
                    className="volume-slider"
                  />
                </div>
                
                <div className="time-display">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
              
              <div className="right-controls">
                <div className="settings-container">
                  <button 
                    className="control-btn" 
                    onClick={() => setShowSettings(!showSettings)}
                  >
                    <Settings size={20} />
                  </button>
                  {showSettings && (
                    <div className="settings-menu">
                      <div className="settings-header">Velocidade de reprodução</div>
                      {[0.5, 0.75, 1.0, 1.25, 1.5, 2.0].map(rate => (
                        <button
                          key={rate}
                          className={`settings-item ${playbackRate === rate ? 'active' : ''}`}
                          onClick={() => changePlaybackRate(rate)}
                        >
                          {rate}x
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <button className="control-btn" onClick={toggleFullscreen}>
                  {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar com capítulos - não aparece em tela cheia */}
        {!isFullscreen && (
          <div className="chapters-sidebar">
            <div className="sidebar-header">
              <h3>Conteúdo da Aula</h3>
              <button className="sidebar-toggle">
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="chapters-list">
              {chapters.map(chapter => (
                <div 
                  key={chapter.id} 
                  className={`chapter-item ${currentTime >= chapter.time ? 'active' : ''} ${chapter.completed ? 'completed' : ''}`}
                  onClick={() => jumpToChapter(chapter.time)}
                >
                  <div className="chapter-icon">
                    {chapter.completed ? <CheckCircle size={16} /> : <Play size={16} />}
                  </div>
                  <div className="chapter-details">
                    <span className="chapter-title">{chapter.title}</span>
                    <span className="chapter-duration">{formatTime(chapter.time)}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="sidebar-footer">
              <button className="download-btn">
                <Download size={18} />
                <span>Material de Apoio</span>
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer - não aparece em tela cheia */}
      {!isFullscreen && <Footer />}
    </div>
  );
};

export default PaginaAula;