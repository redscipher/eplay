import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import * as E from './styles'
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const form = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      cpf: '',
      emailDelivery: '',
      emailDeliveryC: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cvv: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatorio'),
      email: Yup.string()
        .email('Email invalido')
        .required('O campo é obrigatorio'),
      cpf: Yup.string()
        .min(14, 'CPF invalido')
        .required('O campo é obrigatorio'),
      emailDelivery: Yup.string()
        .oneOf([Yup.ref('emailDelivery')], 'Os email sao diferentes')
        .required('O cmapo é obrigatorio'),
      emailDeliveryC: Yup.string()
        .email('Email confirmacao')
        .required('O campo é obrigatorio'),
      // cartoes
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cardName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cardNumber: Yup.number().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      expiresMonth: Yup.number().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      expiresYear: Yup.number().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cvv: Yup.number().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      installments: Yup.number().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      )
    }),
    onSubmit: (values) => {
      alert(values)
    }
  })

  const getErrorMessage = (campo: string, message?: string): string => {
    const estaAlterado = campo in form.touched

    const estaInvalido = campo in form.errors

    if (estaAlterado && estaInvalido) return message as string
    return ''
  }

  return (
    <form className="container" onSubmit={form.handleSubmit}>
      <Card title="Dados de cobrança">
        <>
          <E.Row>
            <E.InputGroup>
              <label htmlFor="fullname">Nome completo</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={form.values.fullname}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullname', form.errors.fullname)}</small>
            </E.InputGroup>
            <E.InputGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </E.InputGroup>
            <E.InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
            </E.InputGroup>
          </E.Row>
          <h3 className="margin-top">Dados de entrega - conteudo digital</h3>
          <E.Row>
            <E.InputGroup>
              <label htmlFor="emailDelivery">Email</label>
              <input
                type="email"
                id="emailDelivery"
                name="emailDelivery"
                value={form.values.emailDelivery}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('emailDelivery', form.errors.emailDelivery)}
              </small>
            </E.InputGroup>
            <E.InputGroup>
              <label htmlFor="emailDeliveryC">Confirme Email</label>
              <input
                type="email"
                id="emailDeliveryC"
                name="emailDeliveryC"
                value={form.values.emailDeliveryC}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('emailDeliveryC', form.errors.emailDeliveryC)}
              </small>
            </E.InputGroup>
          </E.Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <E.TabButton
            type="button"
            active={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Icone boleto" /> Boleto bancario
          </E.TabButton>
          <E.TabButton
            type="button"
            active={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="Icone cartao" /> Cartao de credito
          </E.TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <E.Row>
                  <E.InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartao</label>
                    <input
                      type="text"
                      id="cardOwner"
                      name="cardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </E.InputGroup>
                  <E.InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartao
                    </label>
                    <input
                      type="text"
                      id="cpfCardOwner"
                      name="cpfCardOwner"
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cpfCardOwner',
                        form.errors.cpfCardOwner
                      )}
                    </small>
                  </E.InputGroup>
                </E.Row>
                <E.Row marginTop="24px">
                  <E.InputGroup>
                    <label htmlFor="cardName">Nome no cartao</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardName', form.errors.cardName)}
                    </small>
                  </E.InputGroup>
                  <E.InputGroup>
                    <label htmlFor="cardNumber">Numero do cartao</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </E.InputGroup>
                  <E.InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mes do vencimento</label>
                    <input
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'expiresMonth',
                        form.errors.expiresMonth
                      )}
                    </small>
                  </E.InputGroup>
                  <E.InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano do vencimento</label>
                    <input
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('expiresYear', form.errors.expiresYear)}
                    </small>
                  </E.InputGroup>
                  <E.InputGroup maxWidth="48px">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
                  </E.InputGroup>
                </E.Row>
                <E.Row marginTop="24px">
                  <E.InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select
                      id="installments"
                      name="installments"
                      value={form.values.installments}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    >
                      <option value="">1x de R$ 200,00</option>
                      <option value="">2x de R$ 100,00</option>
                      <option value="">3x de R$ 50,00</option>
                    </select>
                    <small>
                      {getErrorMessage(
                        'installments',
                        form.errors.installments
                      )}
                    </small>
                  </E.InputGroup>
                </E.Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button
        type="button"
        title="Clique aqui para finalizar compra"
        onClick={form.handleSubmit}
      >
        Finalizar compra
      </Button>
    </form>
  )
}

export default Checkout
