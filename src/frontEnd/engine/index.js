/**
 * engine analysis
 */


class Engine {
    constructor(schema) {
        this.schema = schema;
        this.analysis();
    }

    // schema数据校验
    validate() {
        console.log(this.schema);
    }

    // schema数据解析
    analysis() {
        const { pages } = this.schema;

        const page = pages[0];
        const { layout } = page;

        // 存储数据
        this.componentNameSet = new Set();

        // only one page
        function iterator(obj) {
            const {
                id, componentName, props, children
            } = obj;
            let propStringify = '';

            if (componentName) {
                this.componentNameSet.add(componentName);
            }

            if (props) {
                propStringify = JSON.stringify(props);
            }

            if (children) {
                const childrens = children.map((item) => {
                    if (typeof item === 'object') {
                        return iterator(item);
                    }
                    return false;
                });
                return `<Wrapper id=${id} propStringify=${propStringify}>\n<${componentName}>\n${childrens.join('\n')}\n</${componentName}>\n</Wrapper>`;
            }

            return `<Wrapper id=${id} propStringify=${propStringify}>\n<${componentName}></${componentName}>\n</Wrapper>`;
        }

        this.componentJsx(iterator(layout));
    }

    // 生成code
    generateCode() {
        console.log(this.schema);
    }
}

export default Engine;
