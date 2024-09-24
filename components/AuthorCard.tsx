import Image from './Image'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

const AuthorCard = ({ content }) => {
  const { author, avatar, occupation, company, email, twitter, linkedin, github, location } =
    siteMetadata
  return (
    <div>
      <div className="flex flex-row items-center justify-center space-x-2 pb-8">
        {/* {avatar && (
          <div className="pr-2 xl:pr-4">
            <Image
              src={avatar}
              alt="avatar"
              width={112}
              height={112}
              className="h-48 w-48 min-w-48 rounded-full dark:border-2 dark:border-grey-400 md:h-52 md:w-52"
            />
          </div>
        )} */}
        <div>
          <h3 className="pb-2 pt-4  text-2xl font-bold leading-8 tracking-tight sm:text-3xl md:text-4xl">
            {author}
          </h3>
          <div className="md:text-md text-base text-gray-500 dark:text-gray-400">{occupation}</div>
          <div className="md:text-md text-base text-gray-500 dark:text-gray-400">{company}</div>
          <div className="md:text-md text-base text-gray-500 dark:text-gray-400">{location}</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="github" href={github} />
            {/* <SocialIcon kind="linkedin" href={linkedin} /> */}
            <SocialIcon kind="twitter" href={twitter} />
          </div>
        </div>
      </div>
      <div className="flex max-w-full flex-col items-center justify-center text-center">
        <div className="prose max-w-full pb-8 pt-10 dark:prose-invert xl:text-xl">
          <p>
			In this era of full digitalization, now more than ever, blockchain technology is a victory for freedom and humanity, that must be protected and cherished.\r Let's work together to give back control to people over the digital world.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthorCard
