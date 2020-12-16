import React from 'react'
import Image from 'next/image'
import { StaticText } from './StaticText'
import { Subtitle } from './Subtitle'

export const BlockFour: React.FC<BlockFourProps> = ({}) => {
  return (
    <div className="rent-wrapper">
      <Image src="/static/rent-reporting.gif" width="600" height="600" />
      <div className="rightside">
        <div className="top-text">Build credit with rent</div>
        <p className="bot-text">
          Report up to 24 months of past rent payments to instantly increase
          your score.
        </p>
      </div>
      <style jsx>{`
        .rent-wrapper {
          height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .top-text {
          font-size: 34px;
          margin-bottom: 30px;
          font-weight: 600;
        }
        .rightside {
          font-size: 16px;
          font-family: 'Gilroy-Regular';
        }
        @media only screen and (max-width: 600px) {
          .rent-wrapper {
            diplay: flex;
            flex-direction: column-reverse;
            justify-content: center;
          }
          .top-text {
            width: 315px;
            font-size: 24px;
            margin-left: 30px;
            text-align: center;
          }
          .bot-text {
            margin-left: 57px;
            margin-right: 57px;
            width: 261px;
            height: 81px;
            font-size: 16px;
            line-height: 27px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}
