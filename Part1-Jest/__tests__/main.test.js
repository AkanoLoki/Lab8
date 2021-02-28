const formatVolumeIconPath = require('../assets/scripts/main');

describe('formatVolumeIconPath',()=> {
    test('level 3 lower',()=>{
        expect(formatVolumeIconPath(67)).toBe('./assets/media/icons/volume-level-3.svg');
    });
    test('level 2 upper',()=>{
        expect(formatVolumeIconPath(66)).toBe('./assets/media/icons/volume-level-2.svg');
    });
    test('level 2 lower',()=>{
        expect(formatVolumeIconPath(34)).toBe('./assets/media/icons/volume-level-2.svg');
    });
    test('level 1 upper',()=>{
        expect(formatVolumeIconPath(33)).toBe('./assets/media/icons/volume-level-1.svg');
    });
    test('level 1 lower',()=>{
        expect(formatVolumeIconPath(1)).toBe('./assets/media/icons/volume-level-1.svg');
    });
    test('level 0',()=>{
        expect(formatVolumeIconPath(0)).toBe('./assets/media/icons/volume-level-0.svg');
    });
});