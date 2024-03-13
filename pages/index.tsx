import React from 'react';
import type { NextPage } from 'next';
import Image from "next/image";
import DefaultLayout from './layouts/DefaultLayout';

import { MSButton, MSCard, MSTitleBar } from '../components';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiTypescript,
  SiPhp,
  SiReact,
  SiVuedotjs,
  SiLaravel,
  SiTailwindcss,
  SiGit,
  SiGithub, SiLinkedin
} from '@icons-pack/react-simple-icons';
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CodeBracketSquareIcon, EnvelopeIcon,
  FolderIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  DocumentIcon, QuestionMarkCircleIcon, PhoneIcon
} from "@heroicons/react/24/outline";

import { tools } from '../constants/tools';
import { works } from '../constants/works';
import Technology from "../components/Technology";

const new_tools = tools.slice(0, 4);
const new_works = works.slice(0, 4);

const HomePage: NextPage = () => {
  return (
    <DefaultLayout title="HOME" heroTitle="MatteuSan"
                   heroSubtitle="UX Engineer. Creating a meaningful bridge from software to user."
                   heroAction={ <MSButton type="filled large inverted" link="#about-me">Get to know me</MSButton> } hasHero>

      <section id="about-me" className="grid cols-1 my-xl gap-2xl start-1 end-4 @large:cols-3 @large:mt-xl @large:mb-2xl @large:start-1 @large:end-8">
        <div className="flex flow-column jc-center start-1 end-1 @large:end-2">
          <MSTitleBar icon={ <InformationCircleIcon /> }>About me</MSTitleBar>
          {/* eslint-disable-next-line react/no-unescaped-entities */ }
          <p className="mt-sm">I'm a UX Engineer based in the Philippines, and I build bridges from software to user. With a keen focus
            on <span className="highlight">user-centered design</span> principles and profeciency in <span
              className="highlight">frontend development</span> and design, I excel at creating
            intuitive interfaces through a <span className="highlight">multi-disciplinary approach</span> that enhance usability and drive business
            success.
          </p>
        </div>
        <div className="picture-frame start-1 end-1 @large:start-3 @large:end-3">
          <Image src="/img/matt-headshot.jpg" alt="Matteu Headshot" width={ 3000 } height={ 2000 }/>
        </div>
      </section>

      <section id="skills-and-technologies" className="grid cols-1 my-xl gap-2xl start-1 end-4 @large:cols-3 @large:mt-xl @large:mb-2xl @large:start-1 @large:end-8">
        <div id="technologies" className="start-1 end-1 @large:start-1 @large:end-1" aria-hidden="true">
          <Technology icon={ <SiHtml5/> } label="HTML" color="#E44D26"/>
          <Technology icon={ <SiCss3/> } label="CSS" color="#2965F1"/>
          <Technology icon={ <SiJavascript/> } label="JavaScript" color="#F7DF1E"/>
          <Technology icon={ <SiSass/> } label="SCSS" color="#CD6799"/>
          <Technology icon={ <SiTypescript/> } label="TypeScript" color="#3178C6"/>
          <Technology icon={ <SiPhp/> } label="PHP" color="#8892BF"/>
          <Technology icon={ <SiReact/> } label="React" color="#61DAFB"/>
          <Technology icon={ <SiVuedotjs/> } label="Vue.js" color="#4FC08D"/>
          <Technology icon={ <SiLaravel/> } label="Laravel" color="#FF2D20"/>
          <Technology icon={ <SiTailwindcss/> } label="Tailwind CSS" color="#38B2AC"/>
          <Technology icon={ <SiGit/> } label="Git" color="#F05032"/>
          <Technology icon={ <SiGithub/> } label="GitHub" color="#fff"/>
        </div>
        <div className="flex flow-column jc-center start-1 end-1 @large:start-2 @large:end-3">
          <MSTitleBar icon={ <CodeBracketSquareIcon/> }>Skills & Technology</MSTitleBar>
          <p className="mb-lg mt-sm">Aside from my fluency in UI/UX design and development, my expertise extends
            to <span
              className="highlight">project management</span>, collaboration, and the development and management
            of <span
              className="highlight">design systems</span> and even in <span
              className="highlight">open-source software</span>. <br/> <br/> I prioritize selecting technologies
            tailored
            to address specific challenges and to deliver optimal solutions. While flexibility is key, here are some of
            the
            technologies I keep in my toolbelt. Ensuring <span
              className="highlight">reliability</span>, <span className="highlight">scalability</span>, and <span
              className="highlight">efficiency</span> in every project endeavor. </p>
          {/*<HCTitleBar icon={ <ComputerDesktopIcon/> }>Use of technology</HCTitleBar>*/ }
        </div>
      </section>

      <section id="stuff-i-do" className="start-1 end-4 @large:end-12 ">
        <MSTitleBar icon={<BriefcaseIcon />}>Stuff I do</MSTitleBar>
        <div className="grid cols-1 @medium:cols-2 gap-lg mt-md">
          <MSCard title="Projects" icon={ <FolderIcon /> }
                  description="If you are interested in taking a look on what I've been working on lately, my most recent projects should located below and in the projects page."
                  tags={ ['Web Apps', 'Websites', 'Design Systems'] }>
            <MSButton type="filled" link="#projects">Projects</MSButton>
          </MSCard>
          <MSCard title="Open Source" icon={ <GlobeAltIcon /> }
                  description="I absolutely love doing open source projects! You can check out and use the tools I've been developing and open-sourcing the past few months below and in the tools page.">
            <MSButton type="filled" link="#tools">Open Source Tools</MSButton>
          </MSCard>
        </div>
      </section>

      <section className="content-section @large:start-1 @large:end-4 start-1 end-12">
        <MSTitleBar>Featured works</MSTitleBar>
        <div className="ms-carousel mt-md" id="projects">
          {/*<div className="ms-carousel__start">
            Swipe left
            →
          </div>*/}
          { new_works.map((data, key) => {
            return (
              <MSCard
                key={ key }
                title={ data.name }
                description={ data.desc }
                media={ `/img/` + data.media }
                tags={ data.tags }
              >
                { data.link != null ? <MSButton link={ data.link } type="outlined">Visit</MSButton> : null }
              </MSCard>
            );
          }) }
          <MSButton link="/work" type="outlined full-width" icon={ ['right', <ArrowRightIcon/>] }>See more</MSButton>
          {/*<div className="ms-carousel__start">
            ←
            Swipe right
          </div>*/}
        </div>
      </section>

      <section className="content-section @large:start-1 @large:end-4 start-1 end-12">
        <MSTitleBar>Featured tools</MSTitleBar>
        <div className="ms-carousel mt-md" id="tools">
          { new_tools.map((data, key) => {
            return (
              <MSCard
                key={ key }
                title={ data.name }
                description={ data.desc }
                tags={ data.tags }
              >
                { data.links.src != null ? <MSButton link={ data.links.src } type="outlined">Source</MSButton> : null }
                { data.links.docs != null ? <MSButton link={ data.links.docs } type="outlined">Docs</MSButton> : null }
              </MSCard>
            );
          }) }
          <MSButton link="/tools" type="outlined full-width" icon={ ['right', <ArrowRightIcon/>] }>See more</MSButton>
        </div>
      </section>

      <section className="flex flow-row" style={{ margin: '10rem 0', gap: '2rem' }}>
        <section id="ready-to-collaborate">
          <MSTitleBar icon={<QuestionMarkCircleIcon />}>Need more info?</MSTitleBar>
          <p style={ { margin: '1rem 0' } }>More of me and my work can be found in my resume and in my GitHub page. The
            buttons below should take you there.</p>
          <div style={ {
            display: 'flex',
            flexFlow: 'row wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            margin: '0.7rem 0 0'
          } }>
            <MSButton type="filled" icon={ ['left', <DocumentIcon />] } link="mailto:matteugt@gmail.com"
                      isDisabled>Resume</MSButton>
            <MSButton type="filled" icon={ ['left', <SiGithub />] } link="https://github.com/MatteuSan" isDisabled>GitHub</MSButton>
          </div>
        </section>
        <section id="ready-to-collaborate">
          <MSTitleBar icon={<PhoneIcon />}>Ready to make the leap?</MSTitleBar>
          <p style={ { margin: '1rem 0' } }>I'd be delighted to work on your project! Just click any of the contact buttons  below and we'll keep in touch :)</p>
          <div style={ {
            display: 'flex',
            flexFlow: 'row wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            margin: '0.7rem 0 0'
          } }>
            <MSButton type="filled" icon={ ['left', <EnvelopeIcon />] } link="mailto:matteugt@gmail.com"
                      isDisabled>Email</MSButton>
            <MSButton type="filled" icon={ ['left', <SiLinkedin />] } link="https://linkedin.com/matteu.san" isDisabled>LinkedIn</MSButton>
          </div>
        </section>
      </section>

    </DefaultLayout>
  );
};

export default HomePage;
