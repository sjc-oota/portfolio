import React, { useState, useEffect } from 'react';
import './portfolio.css'; // スタイルシートをインポートします。まだ作成していない場合は作成してください。

function Portfolio() {
  const [name, setName] = useState('');

  useEffect(() => {
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
  }, []);

  return (
    <div className="Portfolio">
      <header className="Portfolio-header">
        <div className='menu'>
          <a href='#name'>名前</a>
          <a href="#experience">業務経歴</a>
          <a href="#skills">スキル</a>
          <a href="#works">成果物</a>
        </div>
      </header>

      <section id="name" className="Portfolio-section">
        <h2>{name}</h2>
      </section>

      <section id="experience" className="Portfolio-section">
        <h3>業務経歴</h3>
        <p>[業務経歴リスト]</p>
      </section>

      <section id="skills" className="Portfolio-section">
        <h3>スキル</h3>
        <p>[スキルリスト]</p>
      </section>

      <section id="works" className="Portfolio-section">
        <h3>成果物</h3>
        <p>[成果物]</p>
      </section>
    </div>
  );
}

export default Portfolio;