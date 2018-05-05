import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../constants';
import { humanizeDate } from '../helpers/date.helpers';

import Paragraph from '../components/Paragraph';
import Link from '../components/Link';

const IndexPost = ({ slug, title, abstract, publishedOn }) => {
  return (
    <Wrapper>
      <PostLink href={`/posts/${slug}`}>
        <PostTitle>{title}</PostTitle>
      </PostLink>
      <Date>{humanizeDate(publishedOn)}</Date>
      <Abstract>
        {abstract}{' '}
        {/* <ReadMoreLink href={`/posts/${slug}`}>Read More</ReadMoreLink> */}
      </Abstract>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 25px;
  /* border-radius: 5px; */
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
  }
`;

const PostLink = styled(Link)`
  /* color: ${COLORS.pink[500]}; */
  text-decoration: none;
`;

const PostTitle = styled.h3`
  font-size: 48px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${COLORS.blue[500]};
  margin-top: -10px;
`;

const Date = styled.h5`
  font-size: 21px;
  font-weight: 500;
  color: ${COLORS.gray[500]};
  margin-bottom: 24px;
`;

const Abstract = styled(Paragraph)`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ReadMoreLink = styled(Link)``;

export default IndexPost;