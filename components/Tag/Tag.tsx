import styles from './Tag.module.css';
import { TagProps } from './Tag.props';
import cn from 'classnames';

export const Tag = ({ size = 's', color = 'ghost', children, href, className, ...props }: TagProps): JSX.Element => {
  return (
    <p 
      className={
        cn(className, styles.tag, {
          [styles.s]: size == 's',
          [styles.m]: size == 'm',
          [styles.ghost]: color == 'ghost',
          [styles.red]: color == 'red',
          [styles.grey]: color == 'grey',
          [styles.green]: color == 'green',
          [styles.primary]: color == 'primary',
        })
      } 
      {...props}
    > 
    {
      href 
        ? <a href={href}>{children}</a> 
        : <>{children}</>
    }
    </p>
  );
};