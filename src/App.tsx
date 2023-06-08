import React from 'react';
import {useRoutes} from 'react-router-dom';
import Tab from '@/view/Tab';
import routes from '@/router';
import '@/styles/index.less';

function App() {
    // 通过useRoutes配置实现路由管理
    const element = useRoutes(routes);
    return (
        <div className='app'>
            {element}
            <Tab />
        </div>
    );
}

export default App;
