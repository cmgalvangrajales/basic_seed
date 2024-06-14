import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import message from './Header.message';

const Header = (): JSX.Element => {
  return (
    <div className="flex justify-between p-3 shadow-md items-center">
      <Link to={'/'} className="text-primary">
        <FormattedMessage {...message.title} />
      </Link>
    </div>
  );
};

export default Header;
