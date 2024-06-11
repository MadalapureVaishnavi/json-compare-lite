function compareJSON(obj1, obj2) {
    const changes = {
        added: {},
        removed: {},
        modified: {}
    };

    function findChanges(o1, o2, path = '') {
        for (let key in o1) {
            if (!o2.hasOwnProperty(key)) {
                changes.removed[path + key] = o1[key];
            } else if (typeof o1[key] === 'object' && typeof o2[key] === 'object') {
                findChanges(o1[key], o2[key], `${path}${key}.`);
            } else if (o1[key] !== o2[key]) {
                changes.modified[path + key] = { old: o1[key], new: o2[key] };
            }
        }

        for (let key in o2) {
            if (!o1.hasOwnProperty(key)) {
                changes.added[path + key] = o2[key];
            }
        }
    }

    findChanges(obj1, obj2);
    return changes;
}

module.exports = compareJSON;
