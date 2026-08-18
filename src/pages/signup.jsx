import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const SignUpPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="w-125">
        <CardHeader>
          <CardTitle>Crie a sua Conta</CardTitle>
          <CardDescription>Insira os dados abaixo:</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Digite seu nome" />
          <Input placeholder="Digite seu sobrenome" />
          <Input placeholder="Digite seu e-mail" />
          <Input type="password" placeholder="Digite seu senha" />
        </CardContent>
        <CardFooter>
          <Button className="w-full">Criar Conta</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignUpPage
