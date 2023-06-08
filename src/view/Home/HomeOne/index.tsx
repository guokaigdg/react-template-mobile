import React from 'react';
import {observer, useLocalObservable} from 'mobx-react-lite';
import {Button, Card} from '@/components';
import './index.less';

const HomeOne = () => {
    /**
     * 关于 useLocalObservable
     * 1. useLocalObservable 是 mobx-react-lite 提供的一个钩子函数，用于在 React 函数组件中创建局部的 observable 对象。
     * 2. 可以使局部的状态更加清晰。
     * 3. 代码更加简洁，避免在顶层创建全局的 observable 对象，提高了组件的可维护性和可重用性。
     */
    const store = useLocalObservable(() => ({
        count: 0,
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    }));

    return (
        <div className='home-one-root'>
            <h3>使用 useLocalObservable 在 React 函数组件中创建局部的 observable 对象</h3>
            <div className='one-des'>
                <h3> 关于 useLocalObservable</h3>
                <h4>
                    1. useLocalObservable 是 mobx-react-lite 提供的一个钩子函数，用于在 React 函数组件中创建局部的
                    observable 对象。
                </h4>
                <h4> 2. 可以使局部的状态更加清晰</h4>
                <h4> 3. 代码更加简洁，避免在顶层创建全局的 observable 对象，提高了组件的可维护性和可重用性。</h4>
            </div>
            <div className='one-card'>
                <Card>
                    <h2>Count: {store.count}</h2>
                </Card>
                <Card>
                    <Button onClick={store.increment}> +1 </Button>
                    <Button onClick={store.decrement}> -1 </Button>
                </Card>
            </div>
        </div>
    );
};

export default observer(HomeOne);
