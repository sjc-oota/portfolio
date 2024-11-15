import React, { useState, useEffect } from 'react';
import './portfolio.css'; // スタイルシートをインポートします。まだ作成していない場合は作成してください。

function Portfolio() {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState([]);
  const [skills, setSkill] = useState([]);
  const [projects, setWorks] = useState([]);

  useEffect(() => {
    // 名前を取得
    fetch('http://localhost:3000/name/show', {
      credentials: 'include' // 必要に応じてクッキーを送信する場合
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setName(data.name))
      .catch(error => console.error('Error fetching name:', error));

    // 業務経歴リストを取得
    fetch('http://localhost:3000/user_history/list', {
      credentials: 'include' // 必要に応じてクッキーを送信する場合
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setExperience(data.user_histories))
      .catch(error => console.error('Error fetching experience:', error));

      // スキルリストを取得
      fetch('http://localhost:3000/skill/list', {
        credentials: 'include' // 必要に応じてクッキーを送信する場合
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => setSkill(data.skills))
        .catch(error => console.error('Error fetching experience:', error));

      // 成果物リストを取得
      fetch('http://localhost:3000/project/list', {
        credentials: 'include' // 必要に応じてクッキーを送信する場合
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => setWorks(data.projects))
        .catch(error => console.error('Error fetching experience:', error));
      }, []);

  return (
    <div className="Portfolio">
      <header className="Portfolio-header">
{/* TODO メニューを追加する
        <div className='menu'>
          <a href='#name'>名前</a>
          <a href="#experience">業務経歴</a>
          <a href="#skills">スキル</a>
          <a href="#projects">成果物</a>
        </div>
 */}
      </header>

      <section id="name" className="Portfolio-section">
        <h2>{name}</h2>
      </section>

      <section id="experience" className="Portfolio-section">
        <h3>業務経歴</h3>
        <ul>
          {experience.map((exp, index) => (
            <li key={index}>
              <strong>{exp.project_name}</strong>: ({new Date(exp.start_date).toLocaleDateString()} ～ {new Date(exp.end_date).toLocaleDateString()}：{exp.role})
            </li>
          ))}
        </ul>
      </section>

      <section id="skills" className="Portfolio-section">
        <h3>スキル</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <strong>{skill.name}（{skill.skill_type}）</strong>
            </li>
          ))}
        </ul>
      </section>
      <section id="projects" className="Portfolio-section">
        <h3>成果物</h3>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <strong>{project.project_name}</strong><br/>
              詳細： {project.content}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;