/*
 *
 *  Copyright (c) 2021 Matteu
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 */

import React from 'react';
import HCTag from './HCTag';

interface HCCardProps {
  title: string;
  icon?: string;
  description?: string;
  media?: string;
  tags?: any;
  hasNoAction?: boolean;
}

const HCCard: React.FC<HCCardProps> = ({ title, icon, description, media, tags, hasNoAction, children }) => {
  if (hasNoAction) {
    return (
      <div className="hc-card">
        { media &&
          <div className="hc-card__media">
            <img src={ media } alt={ title + ` media` } loading="lazy" />
          </div>
        }
        <div className="hc-card__content">
          <div>
            <div className="hc-card__title">
              { icon && <i className="hc-card__title__icon material-icons" aria-hidden="true">{ icon }</i> }
              <h2>{ title }</h2>
            </div>
            { tags &&
              <div className="hc-card__tags">
                { tags.forEach((tag: string) => {
                  return (
                    <HCTag>
                      { tag }
                    </HCTag>
                  );
                }) }
              </div>
            }
            { children && <p className="hc-card__subtitle">{ children }</p> }
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hc-card">
        { media &&
          <div className="hc-card__media">
            <img src={ media } alt={ title + ` media` } />
          </div>
        }
        <div className="hc-card__content">
          <div>
            <div className="hc-card__title">
              { icon && <i className="hc-card__title__icon material-icons" aria-hidden="true">{ icon }</i> }
              <h2>{ title }</h2>
            </div>
            { tags &&
              <div className="hc-card__tags">
                { tags.map((tag: string, key: any) => {
                  return (
                    <HCTag key={ key }>{ tag }</HCTag>
                  );
                }) }
              </div>
            }
            { description && <p className="hc-card__subtitle">{ description }</p> }
          </div>
          { children &&
            <div className="hc-card__actions">
              { children }
            </div>
          }
        </div>
      </div>
    );
  }
};

export default HCCard;