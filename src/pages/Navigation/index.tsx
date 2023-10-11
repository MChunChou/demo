import React, {useRef, useState, useMemo, useCallback} from 'react';
import classNames from 'classnames';
import './index.scss';

import {Props} from './module';
import Toggle from './components/Toggle';
import NavLink from './components/NavLink';

import {config as routersConfig} from 'router';
import {RouteSetting} from 'modules';

const Navigation = (props: Props) => {
    const [active, setActive] = useState(true);
    const handleToggleClick = () => {
        setActive(!active);
    };

    const createLinks = useCallback((config: RouteSetting[]) => {
        let links: React.ReactNode[] = [];
        config.forEach((node, index:number) => {
            if (node.isParentHide && node.children) {
                links = links.concat(createLinks(node.children));
            } else {
                links.push(<NavLink key={node.path} node={node} />);
            }
        });

        return links;
    }, []);

    const linksElement = useMemo(()=>{
        return createLinks(routersConfig);
    }, []);

    const className = classNames('nav', {active});
    return (
        <div className={className}>
            <Toggle
                onClick={handleToggleClick}
            />
            <ul className="nav-main">
                {linksElement}
            </ul>
        </div>
    );
};

Navigation.defaultProps = {};

export default Navigation;
