
import React from 'react';
import Accesibility1 from './Accesibility1';
import Accesibility2 from './Accesibility2';
import Accesibility3 from './Accesibility3';
import Accesibility4 from './Accesibility4';
import Baby1 from './Baby1';
import Baby2 from './Baby2';
import Baby3 from './Baby3';
import Baby4 from './Baby4';
import Badge1 from './Badge1';
import Badge1Cent from './Badge1Cent';
import Badge1Check from './Badge1Check';
import Badge1Dollarsign from './Badge1Dollarsign';
import Badge1Euro from './Badge1Euro';
import Badge1Help from './Badge1Help';
import Badge1Info from './Badge1Info';
import Badge1Minus from './Badge1Minus';
import Badge1Percent from './Badge1Percent';
import Badge1Plus from './Badge1Plus';
import Badge1X from './Badge1X';
import Badge2 from './Badge2';
import Badge2Cent from './Badge2Cent';
import Badge2Check from './Badge2Check';
import Badge2Dollarsign from './Badge2Dollarsign';
import Badge2Euro from './Badge2Euro';
import Badge2Help from './Badge2Help';
import Badge2Info from './Badge2Info';
import Badge2Minus from './Badge2Minus';
import Badge2Percent from './Badge2Percent';
import Badge2Plus from './Badge2Plus';
import Badge2X from './Badge2X';
import Badge3 from './Badge3';
import Badge3Cent from './Badge3Cent';
import Badge3Check from './Badge3Check';
import Badge3Dollarsign from './Badge3Dollarsign';
import Badge3Euro from './Badge3Euro';
import Badge3Help from './Badge3Help';
import Badge3Info from './Badge3Info';
import Badge3Minus from './Badge3Minus';
import Badge3Percent from './Badge3Percent';
import Badge3Plus from './Badge3Plus';
import Badge3X from './Badge3X';
import Badge4 from './Badge4';
import Badge4Cent from './Badge4Cent';
import Badge4Check from './Badge4Check';
import Badge4Dollarsign from './Badge4Dollarsign';
import Badge4Euro from './Badge4Euro';
import Badge4Help from './Badge4Help';
import Badge4Info from './Badge4Info';
import Badge4Minus from './Badge4Minus';
import Badge4Percent from './Badge4Percent';
import Badge4Plus from './Badge4Plus';
import Badge4X from './Badge4X';
import Boost from './Boost';
import Contrast1 from './Contrast1';
import Contrast2 from './Contrast2';
import Contrast3 from './Contrast3';
import Contrast4 from './Contrast4';
import Eye1 from './Eye1';
import Eye1Closed from './Eye1Closed';
import Eye2 from './Eye2';
import Eye2Closed from './Eye2Closed';
import Eye3 from './Eye3';
import Eye3Closed from './Eye3Closed';
import Eye4 from './Eye4';
import Eye4Closed from './Eye4Closed';
import Forge from './Forge';
import Grow from './Grow';
import Intello from './Intello';
import Studio from './Studio';
import User1 from './User1';
import User1Check from './User1Check';
import User2 from './User2';
import User2Check from './User2Check';
import User3 from './User3';
import User3Check from './User3Check';
import User4 from './User4';
import User4Check from './User4Check';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'Accesibility1' | 'Accesibility2' | 'Accesibility3' | 'Accesibility4' | 'Baby1' | 'Baby2' | 'Baby3' | 'Baby4' | 'Badge1' | 'Badge1Cent' | 'Badge1Check' | 'Badge1Dollarsign' | 'Badge1Euro' | 'Badge1Help' | 'Badge1Info' | 'Badge1Minus' | 'Badge1Percent' | 'Badge1Plus' | 'Badge1X' | 'Badge2' | 'Badge2Cent' | 'Badge2Check' | 'Badge2Dollarsign' | 'Badge2Euro' | 'Badge2Help' | 'Badge2Info' | 'Badge2Minus' | 'Badge2Percent' | 'Badge2Plus' | 'Badge2X' | 'Badge3' | 'Badge3Cent' | 'Badge3Check' | 'Badge3Dollarsign' | 'Badge3Euro' | 'Badge3Help' | 'Badge3Info' | 'Badge3Minus' | 'Badge3Percent' | 'Badge3Plus' | 'Badge3X' | 'Badge4' | 'Badge4Cent' | 'Badge4Check' | 'Badge4Dollarsign' | 'Badge4Euro' | 'Badge4Help' | 'Badge4Info' | 'Badge4Minus' | 'Badge4Percent' | 'Badge4Plus' | 'Badge4X' | 'Boost' | 'Contrast1' | 'Contrast2' | 'Contrast3' | 'Contrast4' | 'Eye1' | 'Eye1Closed' | 'Eye2' | 'Eye2Closed' | 'Eye3' | 'Eye3Closed' | 'Eye4' | 'Eye4Closed' | 'Forge' | 'Grow' | 'Intello' | 'Studio' | 'User1' | 'User1Check' | 'User2' | 'User2Check' | 'User3' | 'User3Check' | 'User4' | 'User4Check';
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Ethereal: React.FC<IconProps> = ({ name, size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => {
  const icons = { Accesibility1, Accesibility2, Accesibility3, Accesibility4, Baby1, Baby2, Baby3, Baby4, Badge1, Badge1Cent, Badge1Check, Badge1Dollarsign, Badge1Euro, Badge1Help, Badge1Info, Badge1Minus, Badge1Percent, Badge1Plus, Badge1X, Badge2, Badge2Cent, Badge2Check, Badge2Dollarsign, Badge2Euro, Badge2Help, Badge2Info, Badge2Minus, Badge2Percent, Badge2Plus, Badge2X, Badge3, Badge3Cent, Badge3Check, Badge3Dollarsign, Badge3Euro, Badge3Help, Badge3Info, Badge3Minus, Badge3Percent, Badge3Plus, Badge3X, Badge4, Badge4Cent, Badge4Check, Badge4Dollarsign, Badge4Euro, Badge4Help, Badge4Info, Badge4Minus, Badge4Percent, Badge4Plus, Badge4X, Boost, Contrast1, Contrast2, Contrast3, Contrast4, Eye1, Eye1Closed, Eye2, Eye2Closed, Eye3, Eye3Closed, Eye4, Eye4Closed, Forge, Grow, Intello, Studio, User1, User1Check, User2, User2Check, User3, User3Check, User4, User4Check };
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} color={color} strokeWidth={strokeWidth} color1={color1} color2={color2} className={className} {...props} />;
};

export default Ethereal;
