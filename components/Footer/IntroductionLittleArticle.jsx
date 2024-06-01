import React from 'react'
import styles from './IntroductionLittleArticle.module.css'

const IntroductionLittleArticle = () => {
  return (
    
    <article className={`${styles.outerContainer}`}>
        <h4>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h4>
        <span className={`${styles.firstRow}`}>یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛</span>
        <span className={`${styles.secondRow}`}>ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.</span>
        <span className={`${styles.thirdRow}`}>یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌</span>
    </article>
    
  )
}

export default IntroductionLittleArticle