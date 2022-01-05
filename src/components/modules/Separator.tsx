import React from 'react';
import { View } from 'react-native';

interface ChildProps {
  height?: number | string;
  width?: number | string;
}

const Separator: React.FC<ChildProps> = ({ height, width }) => {
  return <View style={{ width, height }} />;
};

export default Separator;
