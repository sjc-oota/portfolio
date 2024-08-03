import React from 'react';
import './portfolio.css'; // スタイルシートをインポートします。まだ作成していない場合は作成してください。

function Portfolio() {
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
        <h3>[名前]</h3>
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