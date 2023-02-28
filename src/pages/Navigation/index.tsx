import React, {useRef} from 'react';
import {Props} from './module';
import './index.scss';

import Button from 'components/Button';
const Navigation = (props: Props) => {
    const ref = useRef<any>();
    return (
        <div id='navigation'>
            Navigation
            {/* <Button ref={ref}></Button> */}

        </div>
    );
};

Navigation.defaultProps = {};

export default Navigation;
