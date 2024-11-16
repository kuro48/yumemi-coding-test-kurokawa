export type Props = {
  prefName: string;
};

export default function CheckBox(props: Props) {
  return (
    <div className="px-3 py-2 flex align-center rounded-md bg-gray-300 justify-center">
      <input type="checkbox" />
      <h2 className="mx-2 text-xl lg:text-base">{props.prefName}</h2>
    </div>
  );
}
