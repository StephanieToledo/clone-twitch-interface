import React from 'react';
import { 
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RigthSide,
  WhiteCircle,
 } from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>stephanie_toledo</Username>
          <Info>33 new videos</Info>
        </Column>
      </LeftSide>

      <RigthSide>
        <WhiteCircle />
      </RigthSide>
    </ChannelContainer>
  )

  return (
   <List>
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />
   </List>
  );
};

export default ChannelList;
