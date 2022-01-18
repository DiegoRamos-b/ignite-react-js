interface CardSummaryProps {
  title: string;
  image: string;
  value: number;
}

export function CardSummary(props: CardSummaryProps) {
  return (
    <div>
      <header>
        <p>{props.title}</p>
        <img src={ props.image } alt={ props.title } />
      </header>
      <strong>
        {
          props.title === 'Saidas'? (
            `- ${new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency'
            }).format(props.value)}`
          ): (
            new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency'
            }).format(props.value)
          )
        }
      </strong>
    </div>
  );
}
