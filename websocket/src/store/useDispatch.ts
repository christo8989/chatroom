import { AppDispatch } from '~/store/store';
import { useDispatch as useReduxDispatch } from 'react-redux';

export const useDispatch: () => AppDispatch = useReduxDispatch;