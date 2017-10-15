import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const contactHTML = this.props.contacts.map((info) => (
      <li key={info.key}>
        <a href={info.link} target="_blank">
          <img src={`./img/${ info.imgPath }`} alt={info.alt} />
        </a>
      </li>
    ))
    
    const aboutDetailsHTML = this.props.aboutDetails.map((info) => (
      <li key={info.key}>
        <img src={`./img/home.${ info.imgPath }`} alt={info.alt} />
        <h2>{info.title}</h2>
        <p>{info.content}</p>
      </li>
    ))

    return (
      <section className="home">
        <div className="section-separator">
          <h1 className="name">Maxwell Alexius</h1>
          <img className="avatar" src="./img/maxwell_at_HK_squared.jpg" alt="Maxwell Alexius" />
        </div>

        <div className="section-separator">
          <ul className="contact-links">
            {contactHTML}
          </ul>
        </div>

        <div className="section-separator">
          <ul className="about-details">
            {aboutDetailsHTML}
          </ul>
        </div>
      </section>
    )
  }
}

Home.defaultProps = {
  contacts: [
    { 
      key: 1,
      link: 'https://www.facebook.com/dragon.maximilian',
      imgPath: 'facebook.black.png',
      alt: 'Facebook Logo Black'
    },
    { 
      key: 2,
      link: 'https://www.linkedin.com/in/huang-alexius-a95258a4/',
      imgPath: 'linkedin.black.png',
      alt: 'Linkedin Logo Black'
    },
    { 
      key: 3,
      link: 'https://twitter.com/Maxwell_Alexius',
      imgPath: 'twitter.black.png',
      alt: 'Twitter Logo Black'
    },
    { 
      key: 4,
      link: 'https://medium.com/@maximilianhuang',
      imgPath: 'medium.black.png',
      alt: 'Medium Logo Black'
    },
  ],
  aboutDetails: [
    {
      key: 1,
      imgPath: 'front-end.png',
      alt: 'Front End Engineer Icon by Maxwell Alexius',
      title: 'Web Developer',
      content: 'I\'m a web developer in Taipei City, Taiwan. I have about a year of experience on programming and mostly focusing on full stack web development.'
    },
    {
      key: 2,
      imgPath: 'artist-and-design.png',
      alt: 'Artist and Design Icon by Maxwell Alexius',
      title: 'Artist & Designer',
      content: 'I\'m also an artist and a designer. I draw any kinds of art including sketch, water paint, oil paint, pastels, and computer graphics (by Adobe Illustrator).'
    },
    {
      key: 3,
      imgPath: 'dragon.png',
      alt: 'Dragon Icon by Maxwell Alexius',
      title: 'Dragon Worshipper',
      content: 'I\'m a Middle Ages enthusiast, and dragons are the most fantastic and legendary creature which I love the most.'
    },
  ]
}
