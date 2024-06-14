// import { useQuery } from 'react-query';
// import SomethingService from '@root/src/services/Something';
// import { HomeType } from './Home.types';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import React from 'react';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const itemsNest: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel nest panel',
    children: <p>{text}</p>,
  },
];

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <Collapse defaultActiveKey="1" items={itemsNest} />,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const Home = (): React.ReactNode => {
  // TODO: here's an example to get data but it's gonna fail as it's just an example
  /* const getSomething = async () => {
    const data = await SomethingService.getSomething();
    return data.something;
  };
  const { data, isLoading, isFetching, isError, error } = useQuery('podcasts', getSomething);
  const loading = isLoading || isFetching;

  if (loading) {
    return null;
  }

  if ((!loading && isError) || !data) {
    console.error('getSomething error', error);
    return null;
  } */
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse onChange={onChange} items={items} />;
};

export default Home;
