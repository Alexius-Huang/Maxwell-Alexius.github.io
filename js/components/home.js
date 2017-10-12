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
    ));

    return (
      <section className="home">
        <h1 className="name">Maxwell Alexius</h1>
        <img className="avatar" src="./img/maxwell_at_HK_squared.jpg" alt="Maxwell Alexius" />
        <ul className="contact-links">
          {contactHTML}
        </ul>
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
  ]
}