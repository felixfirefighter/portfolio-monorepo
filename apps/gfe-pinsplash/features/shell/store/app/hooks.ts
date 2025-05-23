import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import type { AppDispatch, RootState } from '..';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSearchTerm = () =>
  useAppSelector((state) => state.app.searchTerm);
