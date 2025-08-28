import React, { useState } from "react";
import { Play, Clock, Users, Star, X, Check } from "lucide-react";
import ResponsiveAppBar from "./appBar";
import Footer from "./footer";

const CourseInterface = () => {
  const [activeTab, setActiveTab] = useState("visao-geral");

  const courseContent = [
    {
      id: 1,
      title: "Sendo um profissional de resultados",
      duration: "1h 1m",
      completed: true,
    },
    {
      id: 2,
      title: "Poder e controle sobre a negociação",
      duration: "9m",
      completed: true,
    },
    {
      id: 3,
      title: "Postura, linguagem corporal e comunicação",
      duration: "10m",
      completed: true,
    },
    {
      id: 4,
      title: "Aprendizados, citações e reflexões sobre eficiência",
      duration: "10m",
      completed: true,
    },
    {
      id: 5,
      title: "Negociação e influência com foco emocional",
      duration: "11m",
      completed: true,
    },
    {
      id: 6,
      title: "Características em comum à liderança efetiva",
      duration: "11m",
      completed: true,
    },
    {
      id: 7,
      title: "As 6 maiores lições dos profissionais de resultados",
      duration: "10m",
      completed: false,
    },
  ];

  const tabs = [
    { id: "visao-geral", label: "Visão geral" },
    { id: "observacoes", label: "Observações" },
    { id: "anuncios", label: "Anúncios" },
    { id: "avaliacoes", label: "Avaliações" },
    { id: "ferramentas", label: "Ferramentas de aprendizado" },
  ];

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#111827",
      color: "white",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    mainLayout: {
      display: "flex",
    },
    videoSection: {
      flex: 1,
    },
    heroVideo: {
      position: "relative",
      height: "384px",
      background: "linear-gradient(to right, black, #374151, black)",
      overflow: "hidden",
    },
    backgroundImages: {
      position: "absolute",
      inset: 0,
      display: "flex",
    },
    imageSection: {
      width: "33.333%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    },
    imageLeft: {
      backgroundColor: "#1a1a1a",
      opacity: 0.8,
    },
    imageCenter: {
      backgroundColor: "#2a2a2a",
      opacity: 0.9,
    },
    imageRight: {
      backgroundColor: "#1a1a1a",
      opacity: 0.8,
    },
    playButtonContainer: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    playButton: {
      width: "80px",
      height: "80px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(8px)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    playButtonHover: {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    tabsContainer: {
      backgroundColor: "#374151",
      borderBottom: "1px solid #4B5563",
    },
    tabsWrapper: {
      display: "flex",
      gap: "32px",
      padding: "0 24px",
    },
    tab: {
      padding: "16px 0",
      fontSize: "14px",
      fontWeight: "500",
      borderBottom: "2px solid transparent",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      transition: "color 0.2s ease",
    },
    tabActive: {
      borderBottomColor: "#3B82F6",
      color: "#60A5FA",
    },
    tabInactive: {
      color: "#9CA3AF",
    },
    tabInactiveHover: {
      color: "#E5E7EB",
    },
    courseInfo: {
      padding: "24px",
      backgroundColor: "#374151",
    },
    courseTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "16px",
      lineHeight: "1.4",
    },
    courseTitleHighlight: {
      color: "#60A5FA",
    },
    courseStats: {
      display: "flex",
      alignItems: "center",
      gap: "24px",
      fontSize: "14px",
      color: "#D1D5DB",
    },
    statItem: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    rating: {
      color: "#F59E0B",
      fontWeight: "600",
    },
    sidebar: {
      width: "384px",
      backgroundColor: "#F3F4F6",
      color: "#111827",
      height: "100vh",
      overflowY: "auto",
    },
    sidebarHeader: {
      padding: "16px",
      borderBottom: "1px solid #D1D5DB",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    sidebarTitle: {
      fontSize: "18px",
      fontWeight: "600",
    },
    closeButton: {
      width: "20px",
      height: "20px",
      color: "#6B7280",
      cursor: "pointer",
    },
    section: {
      borderBottom: "1px solid #D1D5DB",
    },
    sectionHeader: {
      padding: "16px",
      backgroundColor: "#F9FAFB",
    },
    sectionHeaderContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    sectionTitle: {
      fontWeight: "500",
      fontSize: "14px",
    },
    sectionProgress: {
      fontSize: "12px",
      color: "#6B7280",
      marginTop: "4px",
    },
    moduleList: {
      margin: 0,
      padding: 0,
    },
    moduleItem: {
      padding: "16px",
      borderBottom: "1px solid #F3F4F6",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
    },
    moduleItemHover: {
      backgroundColor: "#F9FAFB",
    },
    moduleContent: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
    },
    checkbox: {
      width: "16px",
      height: "16px",
      marginTop: "4px",
      borderRadius: "2px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxCompleted: {
      backgroundColor: "#7C3AED",
    },
    checkboxIncomplete: {
      border: "2px solid #D1D5DB",
    },
    moduleDetails: {
      flex: 1,
      minWidth: 0,
    },
    moduleTitle: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#111827",
      lineHeight: "1.3",
      margin: 0,
    },
    moduleDuration: {
      fontSize: "12px",
      color: "#6B7280",
      marginTop: "4px",
    },
  };

  return (
    <>
      <ResponsiveAppBar />
      <div style={styles.container}>
        <div style={styles.mainLayout}>
          {/* Video Section */}
          <div style={styles.videoSection}>
            {/* Hero Video Area */}
            <div style={styles.heroVideo}>
              {/* Background Images */}
              <div style={styles.backgroundImages}>
                <div style={{ ...styles.imageSection, ...styles.imageLeft }}>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to right, transparent, black)",
                      opacity: 0.5,
                    }}
                  ></div>
                </div>
                <div
                  style={{ ...styles.imageSection, ...styles.imageCenter }}
                ></div>
                <div style={{ ...styles.imageSection, ...styles.imageRight }}>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to left, transparent, black)",
                      opacity: 0.5,
                    }}
                  ></div>
                </div>
              </div>

              {/* Play Button */}
              <div style={styles.playButtonContainer}>
                <button
                  style={styles.playButton}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                  }}
                >
                  <Play
                    style={{
                      width: "32px",
                      height: "32px",
                      color: "white",
                      marginLeft: "4px",
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div style={styles.tabsContainer}>
              <div style={styles.tabsWrapper}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      ...styles.tab,
                      ...(activeTab === tab.id
                        ? styles.tabActive
                        : styles.tabInactive),
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== tab.id) {
                        e.target.style.color = "#E5E7EB";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== tab.id) {
                        e.target.style.color = "#9CA3AF";
                      }
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Course Info */}
            <div style={styles.courseInfo}>
              <h1 style={styles.courseTitle}>
                O que podemos aprender nas séries Suits, Billions e Dilema sobre
                <br />
                <span style={styles.courseTitleHighlight}>
                  influência, negociação, liderança e eficiência
                </span>
              </h1>

              <div style={styles.courseStats}>
                <div style={styles.statItem}>
                  <Star
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "#F59E0B",
                      fill: "#F59E0B",
                    }}
                  />
                  <span style={styles.rating}>4.7</span>
                </div>
                <div style={styles.statItem}>
                  <Users style={{ width: "16px", height: "16px" }} />
                  <span>3.499 Alunos</span>
                </div>
                <div style={styles.statItem}>
                  <Clock style={{ width: "16px", height: "16px" }} />
                  <span>1,5 horas Total</span>
                </div>
                <span style={{ color: "#9CA3AF" }}>195 classificações</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={styles.sidebar}>
            <div style={styles.sidebarHeader}>
              <h2 style={styles.sidebarTitle}>Conteúdo do curso</h2>
              <X style={styles.closeButton} />
            </div>

            {/* Section 1 */}
            <div style={styles.section}>
              <div style={styles.sectionHeader}>
                <div style={styles.sectionHeaderContent}>
                  <h3 style={styles.sectionTitle}>
                    Seção 1: Profissionais de resultados
                  </h3>
                  <span style={{ fontSize: "12px", color: "#6B7280" }}>▼</span>
                </div>
                <p style={styles.sectionProgress}>6 / 7 | 1h 1m</p>
              </div>

              <div style={styles.moduleList}>
                {courseContent.slice(0, 7).map((item, index) => (
                  <div
                    key={item.id}
                    style={styles.moduleItem}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#F9FAFB";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <div style={styles.moduleContent}>
                      <div
                        style={{
                          ...styles.checkbox,
                          ...(item.completed
                            ? styles.checkboxCompleted
                            : styles.checkboxIncomplete),
                        }}
                      >
                        {item.completed && (
                          <Check
                            style={{
                              width: "12px",
                              height: "12px",
                              color: "white",
                            }}
                          />
                        )}
                      </div>
                      <div style={styles.moduleDetails}>
                        <h4 style={styles.moduleTitle}>
                          {index + 1}. {item.title}
                        </h4>
                        <p style={styles.moduleDuration}>{item.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2 */}
            <div style={styles.section}>
              <div style={styles.sectionHeader}>
                <div style={styles.sectionHeaderContent}>
                  <h3 style={styles.sectionTitle}>
                    Seção 2: Livros que complementam o aprendizado
                  </h3>
                  <span style={{ fontSize: "12px", color: "#6B7280" }}>▼</span>
                </div>
                <p style={styles.sectionProgress}>0 / 8 | 18m</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseInterface;
