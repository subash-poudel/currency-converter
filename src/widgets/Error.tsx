type IError = {
  message: string;
};

export function AppError({ message }: IError) {
  return <p>{message}</p>;
}
