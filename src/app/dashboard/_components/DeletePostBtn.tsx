import { DeleteIcon } from "@/lib/icons/DeleteIcon";
import { deletePost } from "../_lib/actions";

export function DeletePostBtn({ id }: { id: string }) {
  return (
    <form action={deletePost}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="ml-auto inline-flex items-center border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto"
      >
        <DeleteIcon />
      </button>
    </form>
  );
}
