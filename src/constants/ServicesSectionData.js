import React from "react"
import { FaRegNewspaper, FaRegLightbulb } from "react-icons/fa"
import { TiPen } from "react-icons/ti"
import { GiPaperClip } from "react-icons/gi"
import { ImBubbles4 } from "react-icons/im"
import { MdComputer } from "react-icons/md"

const data = [
  {
    id: 1,
    title: "Media relations",
    description:
      "Grab a journalist's attention and make the news with the right message.",
    icon: <FaRegNewspaper className="service-icon"></FaRegNewspaper>,
  },
  {
    id: 2,
    title: "Thought leadership",
    description:
      "Increase trust, transparency and reputation by giving your Executive team a voice.",
    icon: <FaRegLightbulb className="service-icon"></FaRegLightbulb>,
  },
  {
    id: 3,
    title: "White papers",
    description: "Speak with authority to influence decision making.",
    icon: <GiPaperClip className="service-icon"></GiPaperClip>,
  },
  {
    id: 4,
    title: "Case studies",
    description:
      "Level up your content marketing and drive results with a compelling case study.",
    icon: <TiPen className="service-icon"></TiPen>,
  },
  {
    id: 5,
    title: "Blogs & long form articles",
    description:
      "Encourage the right people to visit your website with topical informative articles.",
    icon: <ImBubbles4 className="service-icon"></ImBubbles4>,
  },
  {
    id: 6,
    title: "Website copywriting",
    description:
      "Encourage the right people to visit your website with topical informative articles.",
    icon: <MdComputer className="service-icon"></MdComputer>,
  },
]

const ServicesSectionData = () => {
  return (
    <>
      {data.map(card => {
        return (
          <div key={card.id} className="service-card">
            <span>{card.icon}</span>
            <h1>{card.title}</h1>
            <p>{card.description}</p>
          </div>
        )
      })}
    </>
  )
}

export default ServicesSectionData
