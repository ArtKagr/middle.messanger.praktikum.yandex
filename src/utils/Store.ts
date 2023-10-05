import { EventBus } from "./EventBus";
import { Indexed } from "../typings";
import Block from "./Block";

class Store extends EventBus {
    private state: Indexed = {};

    public getState(): Indexed {
        return this.state;
    }

    public set(path: string, value: unknown): void {
        set(this.state, path, value);
        this.emit('updated');
    }


}

function connect(mapStateToProps: (state: Indexed) => Indexed) {
    const store = new Store;

    return function getComponent(Component: typeof Block) {
        return class NewComponent extends Component {
            constructor(props: Indexed) {
                let state: Indexed = mapStateToProps(store.getState());
                super('div', { ...props, ...state });
                store.on('updated', () => {
                    const newState = mapStateToProps(store.getState());
                    if (!isEqual(state, newState)) {
                        this.setProps({ ...newState });
                    }
                });
            }
        }
    }
}

function isPlainObject(value: unknown): value is Indexed {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value: unknown): value is [] {
    return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | Indexed {
    return isPlainObject(value) || isArray(value);
}

function merge(lhs: Indexed, rhs: Indexed): Indexed {
    for (const p in rhs) {
        if (!rhs.hasOwnProperty(p)) {
            continue;
        }

        try {
            if (typeof (rhs[p] as Indexed).constructor === 'object') {
                rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
            } else {
                lhs[p] = rhs[p];
            }
        } catch (e) {
            lhs[p] = rhs[p];
        }
    }

    return lhs;
}

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if (typeof object !== 'object' || object === null) {
        return object;
    }

    if (typeof path !== 'string') {
        throw new Error ('path must be string');
    }

    const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
      [key]: acc
    }), value as Indexed)
    return merge(object as Indexed, result);
}

function isEqual(lhs: Indexed, rhs: Indexed): boolean {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }

    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value as Indexed, rightValue as Indexed)) {
                continue;
            }
            return false;
        }

        if (value !== rightValue) {
            return false;
        }
    }

    return true;
}

export {
    connect
}

