import { ContactNetworks } from '../ContactNetworks'
import { Container } from '../Container'
import { DotGrid } from '../DotGrid'
import { Title } from '../Title'

export const Contact = () => {
  return (
    <Container>
      <Title title="contato" japTitle="接触" />
      <div className="flex flex-col items-center gap-4">
        <form
          className="w-full flex flex-col gap-2 px-1"
          action="/"
          method="post"
          autoComplete="off"
        >
          <input className="input-form" placeholder="nome *" type="text" name="name" />
          <input className="input-form" placeholder="email *" type="email" name="email" />
          <input className="input-form" placeholder="assunto" type="text" name="subject" />
          <textarea className="input-form h-26 " placeholder="mensagem *" name="message" />
          <input
            className="input-form cursor-pointer text-xl font-bold"
            type="submit"
            value="enviar email"
          />
        </form>
        <ContactNetworks />
      </div>
      <DotGrid
        position={['top', 'right']}
        rows={[
          ['1', '1', '0'],
          ['0', '1', '1'],
          ['0', '0', '1'],
        ]}
      />
      <DotGrid
        position={['bottom', 'right']}
        rows={[
          ['0', '0', '1'],
          ['0', '1', '1'],
          ['1', '1', '0'],
        ]}
      />
    </Container>
  )
}
