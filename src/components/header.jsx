import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { ChevronDownIcon, LogOutIcon } from 'lucide-react'

import logo from '@/assets/images/logo.svg'
import { useAuthContext } from '@/context/auth'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const Header = () => {
  const { user, signOut } = useAuthContext()
  return (
    <Card>
      <CardContent className="flex justify-between px-8 py-4">
        <div>
          <img src={logo} alt="FinTrack" />
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="space-x-1">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    {user.firstName[0]}
                    {user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm">
                  {user.firstName} {user.lastName}
                </p>
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Meu Perfil</DropdownMenuLabel>
              <DropdownMenuItem>
                <Button
                  variant="ghost"
                  size="small"
                  className="w-full justify-start"
                  onClick={signOut}
                >
                  <LogOutIcon />
                  Sair
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  )
}

export default Header
