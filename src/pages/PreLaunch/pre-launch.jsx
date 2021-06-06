import React, { useState } from 'react';

import CustomButton from '../../components/CustomButton';

import {
  BannerImage,
  Content,
  TextContainer,
  DescriptionHeader,
  PageContainer,
  WelcomeHeader,
} from './styles';

const PreLaunch = () => {
  const [email, setEmail] = useState('');
  const [componentDisplayed, setComponentDisplayed] = useState('');
  const handleChange = ({ target: { value } }) => {
    setEmail(value);
  };
  // make process into clicking through components, no scrolling
  return (
    <PageContainer>
      <BannerImage src='/pcpg-logo.png' alt='banner image' />
      <div className='flex justify-center gap-1 px-20 border-2 border-black w-2/4'>
        <div className='flex flex-col items-center justify-center border-2 border-blue-500 px-10 m-6 w-2/5'>
          Heres some text about what the site intends to do and how it will
          eventually function
        </div>
        <div className='flex flex-col items-center justify-center border-red-500 border-2 px-10 m-6 w-3/5'>
          <form>
            <h2>Im gonna put a sign up form here</h2>
            <label htmlFor='email'>Email</label>
            <input onChange={() => handleChange} />
          </form>
        </div>
      </div>
    </PageContainer>
    // <PageContainer>
    //   <BannerImage src='/pcpg-banner-wide.png' alt='banner image' />
    //   <TextContainer>
    //     <WelcomeHeader>Welcome to PC Part Giver</WelcomeHeader>
    //     <Content>
    //       We intend to provide users (that's you) with the opportunity to enter
    //       giveaways and win awesome prizes! Our goal is to offer giveaways
    //       monthly (maybe even weekly or daily) with tons of great prizes from
    //       CPU coolers to CPUs!
    //     </Content>
    //   </TextContainer>
    //   <div className='bg-red-400'>
    //     <TextContainer>
    //       <DescriptionHeader className='text-white'>
    //         So how is this going to work?
    //       </DescriptionHeader>
    //       <Content className='text-white'>
    //         We will be building out a system for earning tickets which you can
    //         use to enter into any giveaway drawing we may offer on our site.
    //       </Content>
    //     </TextContainer>
    //   </div>
    //   <div className='bg-black'>
    //     <TextContainer>
    //       <DescriptionHeader className='text-red-400'></DescriptionHeader>
    //       <Content className='text-red-400'>
    //         If you're interested in getting
    //         <span className='text-gray-200'> FREE </span>PC parts
    //         <br />
    //         <span className='text-sm text-gray-200'>
    //           which we're pretty sure you are
    //         </span>
    //         <br />
    //         Enter your email below and we'll mark you down as an honorary
    //         <span className='text-yellow-300'> PCPG Founder </span>
    //         <br />
    //         Fancy title plus some
    //         <span className='text-gray-200'> super special exclusive </span>
    //         bonuses once we officially launch
    //       </Content>
    //       <CustomButton inverted>Click Here</CustomButton>
    //     </TextContainer>
    //   </div>
    // </PageContainer>
  );
};

export default PreLaunch;
