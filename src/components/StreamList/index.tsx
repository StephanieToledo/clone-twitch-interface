import React from 'react';
import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagView,
  TagText,
  List,
  StreamDescription,
  StreamCategory
} from './styles';

const StreamList: React.FC = () => {

  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar/>
            <StreamUsername numberOfLines={1}>Stephanie Toledo</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>Backend com Spring Boot, NodeJS, Typescript e Frontend com Reactjs</StreamDescription>
          <StreamCategory numberOfLines={1}>Science and Technology</StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Português</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>

    </StreamContainer>
  )

  return (
    <List>
      <StreamItem/>
      <StreamItem/>
      <StreamItem/>
      <StreamItem/>
    </List>
  );
};

export default StreamList;