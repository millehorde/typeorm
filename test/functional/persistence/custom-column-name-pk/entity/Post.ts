import {Entity} from "../../../../../src/decorator/entity/Entity";
import {PrimaryColumn} from "../../../../../src/decorator/columns/PrimaryColumn";
import {Column} from "../../../../../src/decorator/columns/Column";
import {ManyToOne} from "../../../../../src/decorator/relations/ManyToOne";
import {Category} from "./Category";
import {Generated} from "../../../../../src/decorator/Generated";

@Entity()
export class Post {

    @PrimaryColumn("int", {name: "theId"})
    @Generated()
    id: number;

    @Column()
    title: string;

    @ManyToOne(type => Category, category => category.posts, {
        cascadeInsert: true
    })
    category: Category;

}