export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
      <input
        {...props}
        className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />
    );
  }
  