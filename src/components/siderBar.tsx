import { DefaultMenuItems } from '@/lib/MenuItem';
import { Button } from '@nextui-org/button';
import { useLocation, useNavigate } from '@tanstack/react-router';
import logoSVG from '@assets/neko.svg';
import { Divider } from "@nextui-org/divider";

export function SiderBar() {
  const nav = useNavigate();
  const path = useLocation().pathname;

  return (
    <div className='sider-bar ml-[3.5rem] mt-[3.5rem] flex-col flex items-center 
    bg-gradient-to-tr from-white to-zinc-100 w-[135px] h-5/6 rounded-3xl'>
      
      <img src={logoSVG} alt='logo' className='w-[6rem] h-[6rem] mt-2'/>
      <a className='text-lg font-semibold mt-2'>Fast Neko</a>
      <Divider className='w-3/4 mt-2' />

      {DefaultMenuItems.map((item) => {
        return (
          <Button 
          variant={path === item.url ? 'flat' : 'light'}
          color='primary'
          className='mt-5 w-[7rem] h-[3.5rem] font-semibold flex items-center' 
          onPress={
            () =>
            nav({to: item.url})
            }
          startContent={item.icon && <item.icon className='text-xl'/>}
          >
            {item.name}
          </Button>
        )
      })}
    </div>
  )
}