import React, { useState, useEffect } from 'react';
import { setPointsBackground, animateCanvas } from '../utils-canvas';
const CircleAnimation203 = ({ hoverElementId }) => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const element = document.getElementById(hoverElementId);

    if (element) {
      const handleMouseEnter = () => setHover(true);
      const handleMouseLeave = () => setHover(false);

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [hoverElementId]);

  return (
    <div className={`circle-container-203 ${hover ? 'hover-203' : ''}`}>
      <div className="circle-203 large" />
      <div className="circle-203 medium" />
      <div className="circle-203 small" />
    </div>
  );
};


const NewsItem = ({ date, title, link }) => (
  <a href={link} className="news-item clearfix" aria-label="Read more">
    <div className="news-date-title">
      <div className="news-date">{date}</div>
      <div className="news-title">{title}</div>
    </div>
    <span className="news-link"><i className="fa-solid fa-arrow-right"></i></span>
  </a>
);

const NewsColumn = ({ newsData }) => (
  <div className="news-container">
    {newsData.map((item, index) => (
      <NewsItem
        key={index}
        date={item.date}
        title={item.title}
        link={item.link}
      />
    ))}
  </div>
);

const newsData = [
  { date: "May 2nd 2024", title: "MindEye2 paper accepted to ICML 2024!", link: "https://medarc-ai.github.io/mindeye2" },
  { date: "Apr 17th 2024", title: "Dr. Paul Scotti podcast appearance on The Cognitive Revolution \“Reading Minds from Shared Latent Space\”", link: "https://www.youtube.com/watch?v=7_BS8tuUoZY" },
  { date: "Apr 12th 2024", title: "Stability AI blog post on MindEye2", link: "https://stability.ai/news/mindeye2-fmri-to-image-with-1-hour-of-data" },
  { date: "Mar 18th 2024", title: "MindEye2 preprint released!", link: "https://medarc-ai.github.io/mindeye2" },
  { date: 'Sept 21st 2023', title: 'MindEye paper accepted as spotlight to NeurIPS 2023!', link: 'https://nips.cc/virtual/2023/poster/70292' },
  { date: 'July 12th 2023', title: 'US Senate hearing on AI and Intellectual Property discusses our work as example AI medical application', link: 'https://www.judiciary.senate.gov/imo/media/doc/2023-07-12_pm_-_testimony_-_brooks.pdf' },
  { date: 'July 6th 2023', title: 'Stability AI blog post on MindEye', link: 'https://stability.ai/research/minds-eye' },
  { date: 'May 29th 2023', title: 'MindEye preprint released!', link: 'https://medarc-ai.github.io/mindeye' }
];



const ContentNews = ({ isMobile }) => {
  useEffect(() => {
    setPointsBackground(0, isMobile);
    animateCanvas('left', '50vh');
    animateCanvas('up', '10vh')

  }
  );

  return (
    <div className="content-news content"
      style={{
        marginTop: "15vh",
      }}
    >

      <div id="news"
        style={{
          backgroundColor: ""
        }}
      >
        <NewsColumn newsData={newsData} />
      </div>

    </div>
  );
}

export { ContentNews, CircleAnimation203 };
