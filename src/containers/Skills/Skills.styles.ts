import styled from 'styled-components';

export const SkillItem = styled.div`
  color: white;
  display: inline-flex;
  padding: 0 12px;
  border-radius: 16px;
  border: 1px solid #009ab6;
  height: 32px;
  align-items: center;
  transition: 350ms;

  &:hover {
    transform: translateX(-3px) translateY(-2px);
  }
`;
