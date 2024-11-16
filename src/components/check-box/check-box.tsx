export type Props = {
  prefName: string;
};

export default function CheckBox(props: Props) {
  return (
    <label className="p-2 flex align-center rounded-md bg-gray-300 justify-center">
      <input type="checkbox" className="w-4" />
      <h2 className="mx-2 text-xl lg:text-base">{props.prefName}</h2>
    </label>
  );
}
