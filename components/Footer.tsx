import Link from 'next/link'
import React from 'react'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-logo">
          <img src="/static/perchlogo.svg" />
        </div>
        <div className="bottom">
          © 2020 Perch Credit, Inc. All rights reserved.
        </div>
      </div>
      <div className="footer-links">
        <ul>
          Resources
          <Link href="/privacy-policy">
            <span>Privacy Policy</span>
          </Link>
          <Link href="/terms-of-service">
            <span>Terms of Service</span>
          </Link>
          <Link href="/about">
            <span>Press</span>
          </Link>
        </ul>
        <ul>
          Company
          <Link href="/about">
            <span>About</span>
          </Link>
          <Link href="/frequently-asked-questions">
            <span>FAQ</span>
          </Link>
        </ul>
        <ul className="social-icons">
          Social
          <ul className="icons-list">
            <Link href="https://www.facebook.com/perchcredit">
              <img src="/static/social-icons/facebook-icon.png" />
            </Link>
            <Link href="https://twitter.com/perchcredit/perchcredit">
              <img src="/static/social-icons/twitter.png" />
            </Link>
            <Link href="https://www.linkedin.com/company/perch-credit">
              <img src="/static/social-icons/linkedin.png" />
            </Link>
            <Link href="https://www.instagram.com/perch.credit/">
              <img src="/static/social-icons/instagram.png" />
            </Link>
          </ul>
        </ul>
      </div>
      <style jsx>{`
        .footer-container {
          max-height: auto;
          display: flex;
          background: #f9f8ff;
          width: 100vw;
          margin-left: -100px;
          padding-top: 79px;
          padding-left: 100px;
          padding-right: 202px;
          padding-bottom: 55px;
          justify-content: space-between;
        }
        .bottom {
          position: absolute;
          align-self: flex-end;
          font-size: 12px;
          color: #aeacb8;
        }
        .footer-left {
          min-height: max;
          width: auto;
          display: flex;
          align-content: flex-start;
        }
        .footer-logo {
          height: 100px;
          width: 100px;
        }
        ul {
          display: flex;
          flex-direction: column;
          span {
            margin-top: 10px;
          }
        }
        .footer-links {
          display: flex;
          width: 35%;
          justify-content: space-between;
        }
        .footer-links > ul {
          line-height: 30px;
        }
        .footer-links > ul > span {
          font-family: Gilroy-Regular;
        }
        .footer-links > ul > img {
          margin-top: 10px;
        }
        .social-icons {
          img {
            height: 19px;
            width: 19px;
            margin-bottom: 22px;
          }
        }
        .icons-list {
          justify-content: flex-start;
          margin-top: 5px;
          padding-top: 10px;
          padding-left: 0px;
        }
        @media only screen and (max-width: 600px) {
          .footer-container {
            width: 100%;
            position: absolute;
            padding: 0px;
            margin-left: 8px;
            display: flex;
            flex-direction: column;
          }
          .footer-links > ul {
            padding-top: 20px;
            font-size: 13px;
            line-height: 15px;
          }
          .footer-links {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin-left: 15px;
          }
          .footer-logo {
            height: 15px;
            width: 54px;
            margin-left: 55px;
            margin-top: 71px;
          }
          .footer-links > ul > img {
            margin: 0px;
          }
          .social-icons {
            margin-left: -22px;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
          }
          ul {
            height: 129px;
          }
          span {
            margin-top: 15px;
          }
        }
      `}</style>
    </div>
  )
}
