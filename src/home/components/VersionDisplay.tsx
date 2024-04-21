import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContentSection } from '../../common';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { version } from '../../../package.json';
import { Tooltip } from '../../common';

const StyledVersionDisplay = styled(ContentSection)`
  display: flex;
  justify-content: space-between;
`;

export const VersionDisplay = () => {
  return (
    <StyledVersionDisplay>
      <p>Version {version}</p>
      <Link to={'https://github.com/clynamic/joi.how'}>
        <Tooltip content='View on GitHub'>
          <h2>
            <FontAwesomeIcon icon={faGithub} />
          </h2>
        </Tooltip>
      </Link>
    </StyledVersionDisplay>
  );
};
