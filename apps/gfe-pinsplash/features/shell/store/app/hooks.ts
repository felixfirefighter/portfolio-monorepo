import type { UnsplashTopic } from '@repo/api-unsplash';
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import type { AppDispatch, RootState } from '..';
import { setSelectedTopic } from './slice';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useToasts = () => useAppSelector((state) => state.app.toasts);
export const useSearchActive = () =>
  useAppSelector((state) => state.app.isSearchActive);
export const useSearchTerm = () =>
  useAppSelector((state) => state.app.searchTerm);
export const useSelectedTopic = () =>
  useAppSelector((state) => state.app.selectedTopic);

export const useSetSelectedTopic = () => {
  const dispatch = useAppDispatch();
  return (topic: UnsplashTopic) => dispatch(setSelectedTopic(topic));
};
