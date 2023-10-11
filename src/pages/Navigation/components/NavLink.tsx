import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {faCaretRight, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {NavLinksProps as Props} from '../module';
import {FaUser} from 'react-icons/fa';

import IconButton from 'components/Button/IconButton';
import classNames from 'classnames';
// import IconButton from 'components/ChatGPT/IconButton';

const NavLink = (props: Props) => {
  const [active, setActive] = useState(false);

  const hasChildren = useMemo(() => {
    return props.node.children && props.node.children.length > 0;
  }, [props.node.children]);

  const path = useMemo(() => {
    return (props.parentPath ? props.parentPath + '/' : '') + props.node.path;
  }, [props.node.path]);

  const children = useMemo(() => {
    if (active && props.node.children) {
      const element = props.node.children.map((children, index) => {
        return <NavLink key={index} node={children} parentPath={path}/>;
      });

      return <ul className='children'>{element}</ul>;
    }
    return undefined;
  }, [active]);

  const handleActive = () => {
    setActive((old) => !old);
  };

  return (
    <li className='nav-link'>
      <span className='href'>
        {
          <IconButton
            className={classNames({'hide': !hasChildren})}
            disabled={!hasChildren}
            fontIcon={active ? faCaretDown : faCaretRight}
            onClick={handleActive}
          />
        }
        {
          hasChildren ?
          <span>{props.node.label}</span> :
          <Link to={path}>{props.node.label}</Link>
        }
      </span>
      {children}
    </li>
  );
};

export default NavLink;
