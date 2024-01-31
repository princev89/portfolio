import Image from 'next/image';

import SagarFullPose from '/public/images/sagar-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="self-center">
        <div className="flex flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>


          <Typography>
            I am a dedicated and skilled full-stack developer, specializing in React.js and Node.js, with a strong commitment to crafting outstanding digital experiences. With valuable experience gained through my full-time employment at
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.COMPANY_URL}
            >
              <span className="px-1">
                Edulyst Ventures Pvt Ltd
              </span>
            </Link>
            , I have played a pivotal role in developing an E-learning application using Flutter. This experience has equipped me with expertise in implementing complex state management, integrating APIs, and optimizing app performance.
          </Typography>

          <Typography>
            My educational background in Computer Science provides a solid foundation, and I am passionate about delivering top-notch solutions. Eager to take on new challenges, I am committed to creating fast, accessible, and visually appealing digital experiences in the ever-evolving landscape of web and mobile application development.
          </Typography>
        </div>
      </div>

    </Container>
  );
};

export default AboutMeSection;
