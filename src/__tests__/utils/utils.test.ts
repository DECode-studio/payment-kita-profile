import { cn } from '@/lib/utils';

describe('utils', () => {
  describe('cn (classnames merger)', () => {
    it('merges multiple class strings', () => {
      expect(cn('foo', 'bar')).toBe('foo bar');
    });

    it('handles conditional classes with arrays', () => {
      expect(cn('foo', ['bar', 'baz'])).toBe('foo bar baz');
    });

    it('handles conditional classes with objects', () => {
      expect(cn('foo', { bar: true, baz: false })).toBe('foo bar');
    });

    it('handles falsy values', () => {
      expect(cn('foo', null, undefined, false, 'bar')).toBe('foo bar');
    });

    it('returns empty string for no arguments', () => {
      expect(cn()).toBe('');
    });
  });
});
