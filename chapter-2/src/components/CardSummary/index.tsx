interface CardSummaryProps {
  title: string;
  image: string;
  value: string;
}

export function CardSummary(props: CardSummaryProps) {
  return (
    <div>
      <header>
        <p>{props.title}</p>
        <img src={ props.image } alt={ props.title } />
      </header>
      <strong>{`${props.value},00`}</strong>
    </div>
  );
}
