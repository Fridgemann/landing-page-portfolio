import Logo from '@/public/logo-as-component.jsx';

import Tilt from 'react-parallax-tilt';

export default function LogoSection() {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.05}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      className="w-32 md:w-40"
    >
      <Logo className="w-full h-auto" />
    </Tilt>
  );
}
